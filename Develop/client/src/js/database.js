import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('editor')) {
        console.log('editor database already exists');
        return;
      }
      db.createObjectStore('editor', { keyPath: 'id', autoIncrement: true });
      console.log('editor database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
//connect to DB and the version we want to use
const editorDb = await openDB('jate', 1);
//create transation and specify DB
const tx = editorDb.transaction('editor', 'readwrite');
//open up desired objectSTore
const store = tx.objectStore('editor'); 
//use the .put method to update the DB 
const request = store.put({editor: content})
//confirmation request
const result = await request;
console.log('🚀 - data saved to the database', result);

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Create a connection to the database database and version we want to use.
  const editorDb = await openDB('jate', 1);

  // Create a new transaction and specify the database and data privileges.
  const tx = editorDb.transaction('editor', 'readonly');

  // Open up the desired object store.
  const store = tx.objectStore('editor');

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
