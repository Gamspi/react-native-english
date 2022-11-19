import SQLite from 'react-native-sqlite-storage';
import {Word} from '../store/reducers/word/types';

export class WordBaseData {
  private db: any;
  init() {
    this.db = SQLite.openDatabase(
      {
        name: 'wordList',
        location: 'default',
      },
      () => {},
      error => {
        console.log(error);
      },
    );
    this.createTable();
  }

  createTable = () => {
    this.db.transaction(tx => {
      tx.executeSql(
        // 'DROP TABLE Words',
        'CREATE TABLE IF NOT EXISTS Words (id INTEGER PRIMARY KEY AUTOINCREMENT, label VARCHAR(20), value VARCHAR(20))',
        [],
        () => {
          console.log('created');
        },
        err => {
          console.log(err);
        },
      );
    });
  };

  async add(label, value) {
    await this.db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO Words (label, value) VALUES (?, ?)',
        [label, value],
        () => {
          console.log('added successfully');
        },
        error => {
          console.log('error on adding category ' + error.message);
        },
      );
    });
  }

  async get(resolve: (result: Word[]) => void) {
    await this.db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM Words ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          let results: Word[] = [];
          console.log('categories retrieved successfully');
          let len = res.rows.length;
          if (len > 0) {
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i) as Word;
              results.push(item);
            }
          }
          resolve(results);
        },
        error => {
          console.log('error on getting categories ' + error.message);
        },
      );
    });
  }
}
