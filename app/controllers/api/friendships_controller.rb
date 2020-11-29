class Api::FriendshipsController < ApplicationController


    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    def index
        @friendships = Friendship.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        if @user 
            render :index
        else 
            render json: @friendship.errors.full_messages, status: 422
        end

    end


    def destroy
        @goal = Friendship.find(params[:id])

        @goal.destroy
    end







    def friendship_params
        params.require(:friendship).permit(:requester_id, :requestee_id, :accepted)
    end



end
