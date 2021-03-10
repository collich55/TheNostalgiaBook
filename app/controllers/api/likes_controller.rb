class Api::LikesController < ApplicationController
    before_action :require_logged_in

    def create
        @like = Like.new(like_params)
        if @like.save
            render :show
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def index
        @likes = Like.all
        render :index
    end

    


    private

    def like_params
        params.require(:like).permit(:liker_id, :post_id)
    end
end
