class Cheque < ActiveRecord::Base
	validates :name,:amount,:date, presence: true
	validates :amount, numericality: true
	def amount_formatted
		NumberUtil.format_number(amount)
	end
	def number_in_words
		NumberUtil.number_in_words(amount)
	end
end
