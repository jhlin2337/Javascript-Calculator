function isOperator(char) {
	if (char === '+' || char === '-' || char === '*' || char === '/') {
		return true;
	}

	return false;
}

export {isOperator};