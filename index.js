const logger = ({ logName = '', value = '' }) => {
	console.log(`${logName} Malicious Code ${JSON.stringify(value)}`);
};

export default logger;
