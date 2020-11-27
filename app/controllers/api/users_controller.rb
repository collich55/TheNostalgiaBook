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


  private

  def user_params
    params.require(:user).permit(:email, :password, :full_name, :birth_date, :gender)
  end
end
