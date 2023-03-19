const logger = ({ logName = '', value = '', type = 'log' }) => {
	console[type](`${logName} ${JSON.stringify(value)}`);
};

export default logger;
