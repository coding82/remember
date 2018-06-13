'use strict'

const db = require('./db');
const { User, Book } = require('./db/models')

async function seed(){
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({nickName:'Peter', email:'peter@remember.com', password:'123'}),
    User.create({nickName:'Paul', email:'paul@remember.com', password:'123'}),
    User.create({nickName:'Mary', email:'mary@remember.com', password:'123'}),
    User.create({nickName:'Moses', email:'moses@remember.com', password:'123'}),
    User.create({nickName:'John', email:'john@remember.com', password:'123'}),
  ])
  console.log('Users seeded')

  const books = await Promise.all([
    Book.create({status: 'Memorizing', book:'Romans', chapter:'8', verse:'1', userId: '1'}),
    Book.create({status: 'Memorizing', book:'Romans', chapter:'8', verse:'2', userId: '1'}),
    Book.create({status: 'Memorized', book:'Romans', chapter:'8', verse:'3', userId: '1'}),
    Book.create({status: 'Skip', book:'Romans', chapter:'8', verse:'4', userId: '1'}),
    Book.create({status: 'Memorizing', book:'Romans', chapter:'8', verse:'5', userId: '2'}),
    Book.create({status: 'Memorized', book:'Romans', chapter:'8', verse:'6', userId: '2'}),
    Book.create({status: 'Skip', book:'Romans', chapter:'8', verse:'7', userId: '2'}),
    Book.create({status: 'Memorizing', book:'Romans', chapter:'8', verse:'8', userId: '3'}),
    Book.create({status: 'Skip', book:'Romans', chapter:'8', verse:'9', userId: '3'}),
    Book.create({status: 'Memorized', book:'Romans', chapter:'8', verse:'10', userId: '4'})
  ])
  console.log('Books seeded')

  console.log('Seeded all!')
}

seed()
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
  })
  .then(() => {
    db.close()
  })
