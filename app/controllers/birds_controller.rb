class BirdsController < ApplicationController
  def index
    @birds = Bird.all
    render json: @birds
  end

  def show
   @bird = Bird.find_by(id: params[:id])
  if(@bird)
    render json: @bird
  else
    render json: {message: 'No bird'}
  end

  end
end