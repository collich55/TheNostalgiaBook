class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user 
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end

  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def index
    @users = User.all
    render :index
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :full_name, :birth_date, :gender, :school, :location, :written_bio)
  end
end
