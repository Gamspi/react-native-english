import SQLite from 'react-native-sqlite-storage';
import {BaseWord} from '../store/reducers/word/types';
import {Word} from '../types/word';

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
        'CREATE TABLE IF NOT EXISTS Words (id INTEGER PRIMARY KEY AUTOINCREMENT, label VARCHAR(30), value VARCHAR(200), type VARCHAR(30), isInGame NUMERIC(1))',
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

  async add({label, value, type, isInGame}: Omit<Word, 'id'>) {
    const stringValue = JSON.stringify(value);
    await this.db.transaction(txn => {
      txn.executeSql(
        'INSERT INTO Words (label, value, type, isInGame) VALUES (?, ?, ?, ?)',
        [label, stringValue, type, isInGame],
        () => {
          console.log('added successfully');
        },
        error => {
          console.log('error on adding category ' + error.message);
        },
      );
    });
  }
  async delete(id) {
    await this.db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM Words WHERE id=${id}`,
        [],
        () => {
          console.log('added successfully');
        },
        error => {
          console.log('error on adding category ' + error.message);
        },
      );
    });
  }

  async upDate({id, label, value, type, isInGame}: Word) {
    const stringValue = JSON.stringify(value);
    await this.db.transaction(txn => {
      txn.executeSql(
        `UPDATE Words SET value=?, label=?, type=? , isInGame=? WHERE id=${id}`,
        [stringValue, label, type, isInGame],
        () => {
          console.log('update successfully');
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
              let {id, type, value, label, isInGame} = res.rows.item(
                i,
              ) as BaseWord;
              results.push({
                id,
                label,
                type,
                value: JSON.parse(value),
                isInGame: !!isInGame,
              });
            }
          }
          console.log(results);
          resolve(results);
        },
        error => {
          console.log('error on getting categories ' + error.message);
        },
      );
    });
  }
}
