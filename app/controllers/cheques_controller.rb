class ChequesController < ApplicationController
  # bypassing CSRF authentication
  skip_before_filter :verify_authenticity_token
  def index
  	@cheques = Cheque.all
  end

  def show
    @cheque = Cheque.find(params[:id])
  end
  
  def create
    @cheque = Cheque.new(params.require(:cheque).permit(:name,:date,:amount))
    @cheque.save
    render 'show',status: 201
  end


end
