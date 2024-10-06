export const useBeautifulPhoneNumber = (phone: string) => {
	// Разделяем код страны и основной номер
	const countryCodeMatch = phone.match(/^(\+\d{1,3})(\d{10,})$/)

	if (!countryCodeMatch) {
		return phone // Возвращаем оригинальный номер, если формат не совпадает
	}

	const countryCode = countryCodeMatch[1]  // Код страны (+7, +38 и т.д.)
	const number = countryCodeMatch[2]       // Основной номер (не менее 10 цифр)

	// Определяем длину номера и разбиваем его на группы
	let formattedNumber
	switch (number.length) {
		case 10:
			formattedNumber = number.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
			break
		case 11:
			formattedNumber = number.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1 $2 $3 $4')
			break
		case 12:
			formattedNumber = number.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4')
			break
		default:
			// Если длина номера не соответствует ожидаемым, возвращаем без изменений
			return phone
	}

	// Объединяем код страны с форматированным номером
	return `${countryCode} ${formattedNumber}`
}
