<h1 align="center">
  <br>
  <img src="https://github.com/FarhanSolaiman/sql-dbchecker/blob/main/assets/database.PNG" alt="SQL Database Checker" width="720">
  <br>
    SQL Database Checker
  <br>
</h1>

<h4 align="center">An application used to check if a database has contents.</h4>

## Installation

**[PM2](https://pm2.keymetrics.io/)**

```powershell
npm install -g pm2
```

## Usage

**Frontend**

You just open the _index.html_ and you are good to go.

**Backend**

- When running the backend server, first you must enter the **./backend** folder.

```powershell
cd ./backend
```

- If you are initializing the server

```bash
pm2 start app.js -n {name that you prefer ex:backend}
```

> Note: When your backend server is running, you can now access it with pm2 commands anywhere.

- Check the status of the servers as well as what servers are running

```bash
pm2 list
```

- Restarting the server

```bash
pm2 restart {either name or id of the server}
```

- Stopping the server

```bash
pm2 stop {either name or id of the server}
```
