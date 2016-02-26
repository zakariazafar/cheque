require 'spec_helper'

describe ChequesController do
  render_views
  describe "index" do
	  before do
	      Cheque.create!(name: 'Test Name1',date: '2016-02-10',amount: 123456)
	      Cheque.create!(name: 'Test Name2',date: '2016-02-11',amount: 560)
	      Cheque.create!(name: 'Test Name3',date: '2016-02-12',amount: 1245)
	      Cheque.create!(name: 'Test Name4',date: '2016-02-13',amount: 678)
	      Cheque.create!(name: 'Test Name2',date: '2016-02-15',amount: 900)

	      xhr :get, :index, format: :json
	  end
 	subject(:results) { JSON.parse(response.body) }

    it { expect(response.status).to eq(200) }
    it { expect(results.length).to eq(5) }
  end

  describe "show" do
  	before do
  		xhr :get, :show, format: :json, id: cheque_id
  	end
  	subject(:results) { JSON.parse(response.body) }

  	context "when the cheque exists" do
  		let(:cheque){
  			Cheque.create!(name: 'Test Name1',date: '2016-02-10',amount: 123456)
  		}
  		let(:cheque_id) { cheque.id }

  		it { expect(response.status).to eq(200) }
  		it { expect(results["id"]).to eq(cheque.id) }
  		it { expect(results["name"]).to eq(cheque.name) }
  		it { expect(results["date"]).to eq(DateTimeUtil.format_date(cheque.date)) }
  		it { expect(results["number_in_words"]).to eq(NumberUtil.number_in_words(cheque.amount.to_f)) }
  	end
  	
  end

end
