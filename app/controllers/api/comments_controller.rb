class Api::CommentsController < ApplicationController
    before_action :require_logged_in

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.all
        render :index
    end

    


    private

    def comment_params
        params.require(:comment).permit(:body, :commenter_id, :post_id)
    end
end
