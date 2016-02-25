class NumberUtil

	#  convert 1234567890.123 to 1,234,567,890.123
	def self.format_number(number)
		number.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
	end

	def self.number_in_words(number)
		# Gem used from https://github.com/markburns/numbers_in_words
		
		NumbersInWords.in_words(number.to_f)
	end
end