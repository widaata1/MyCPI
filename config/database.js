module.exports = {
    rtPool: {
        user: process.env.REACT_APP_ORACLE_USER,
        password: process.env.REACT_APP_ORACLE_PASSWORD,
        connectString: process.env.REACT_APP_ORACLE_CONNECTIONSTRING,
        poolMin: 10,
        poolMax: 10,
        poolIncrement: 0
    }
};
