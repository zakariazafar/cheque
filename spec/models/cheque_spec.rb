require 'spec_helper'

describe Cheque do
  it "is valid with a name,date and amount" do 
  	cheque = Cheque.create!(name: 'Test Name1',date: '2016-02-10',amount: 123456)
  	expect(cheque).to be_valid
  end
  it "is invalid without a name" do
  	cheque = Cheque.new(name: nil,date: '2016-02-10',amount: 123456)
  	cheque.valid?
  	expect(cheque.errors[:name]).to include("can't be blank")
  end
  it "is invalid without a date" do
  	cheque = Cheque.new(name: 'Test Name1',date: nil,amount: 123456)
  	cheque.valid?
  	expect(cheque.errors[:date]).to include("can't be blank")
  end
  it "is invalid without an amount" do
  	cheque = Cheque.new(name: 'Test Name1',date: '2016-02-10',amount: nil)
  	cheque.valid?
  	expect(cheque.errors[:amount]).to include("can't be blank")
  end
  it "is invalid if not number" do
  	cheque = Cheque.new(name: 'Test Name1',date: '2016-02-10',amount: 'abc')
  	cheque.valid?
  	expect(cheque.errors[:amount]).to include("is not a number")
  end
end
