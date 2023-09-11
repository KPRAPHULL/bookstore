import mysql from 'mysql'

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  // database: 'bookstore',
});

/* 
connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }

  // Create the bookstore database
  connection.query('CREATE DATABASE IF NOT EXISTS bookstore', (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Database bookstore created successfully');
  });

  // Create the book table
  connection.query(
    `CREATE TABLE IF NOT EXISTS books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    release_date VARCHAR(255) NOT NULL,
    isbn BIGINT(13) NOT NULL,
    PRIMARY KEY (id)
  )`, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log('Database bookstore created successfully');
  }
  );

});
*/

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connected');
  }

  // Create the bookstore database
  connection.query('SHOW DATABASES', (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    const exists = rows.some(row => row.Database === 'bookstore');
    if (!exists) {
      // Create the bookstore database
      connection.query('CREATE DATABASE bookstore', (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Database bookstore created');
      });
    }
  })

  // Check if the books table exists
  connection.query('SHOW TABLES IN bookstore', (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    const exists = rows.some(row => row.Table === 'books');
    if (!exists) {
      // Create the books table
      connection.query(
        `CREATE TABLE IF NOT EXISTS books (
          id INT NOT NULL AUTO_INCREMENT,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          release_date VARCHAR(255) NOT NULL,
          isbn BIGINT(13) NOT NULL,
          PRIMARY KEY (id)
        )`, (err, result) => {
        if (err) {
          console.log(err);
        }

        console.log('Table books created successfully');
      }
      );
    }
  });

  // Check if the "users" table exists
  connection.query('SHOW TABLES IN bookstore', (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }

    const exists = rows.some(row => row.Table === 'users');
    if (!exists) {
      // Create the users table
      connection.query(
        `CREATE TABLE IF NOT EXISTS users (
          uname VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL,
          isadmin TINYINT(1) DEFAULT 0,
          PRIMARY KEY (uname)
      )`, (err, result) => {
        if (err) {
          console.log(err);
        }

        console.log('Table users created successfully');
      }
      );
    }
  });

  // Select the bookstore database
  connection.query('USE bookstore', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Database bookstore selected');
  });

  // Insert default data in "books" table
  const books = [
    {
      title: "Object-Oriented Programming in C++",
      description: "Best book of C++, contain 100+ exercise",
      release_date: "10/03/2009",
      isbn: 9788131722824
    },
    {
      title: "CRACKING the CODING INTERVIEW",
      description: "#1 Best-Selling Interview Book",
      release_date: "13/05/2015",
      isbn: 9780984782464
    },
    {
      title: "A Handbook on Electronics Enginerring",
      description: "For cracking ESE, GATE, PSUs & Other competitive exams",
      release_date: "13/07/2012",
      isbn: 9789388137,
    },
    {
      title: "QUANTITIVE APTITUDE",
      description: "For cracking goverment exam",
      release_date: "10/12/1989",
      isbn: 97789355012326
    },
    {
      title: "Satelite Communication",
      description: "Learning about communication in satelite",
      release_date: "24/05/2015",
      isbn: 97789355012326
    }
  ];

  // const books = [
  //   ['Object-Oriented Programming in C++', 'Best book of C++, contain 100+ exercise', '10/03/2009', 9788131722824],
  //   ['CRACKING the CODING INTERVIEW', '#1 Best-Selling Interview Book', '13/05/2015', 9780984782464]
  // ];

  const sql = `INSERT INTO books(title, description, release_date, isbn) VALUES ?`;
  // Execute the query
  connection.query(sql, [books.map((item) => [item.title, item.description, item.release_date, item.isbn])], (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Initial BOOK data inserted successfully');
    }
  });

  // Insert default data in "user" table
  connection.query(
    `INSERT INTO users(uname, password, isadmin) VALUES('admin', 'admin', 1)`, (error, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Initial USER data inserted successfully');
      }
    });
});

export default connection;