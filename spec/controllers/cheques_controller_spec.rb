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

    def extract_name
      ->(object) { object["name"] }
    end
  end

end
