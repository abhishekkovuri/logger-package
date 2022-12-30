const logger = ({ logName = '', value = '' }) => {
	console.log(`${logName} ${JSON.stringify(value)}`);
};

export default logger;
