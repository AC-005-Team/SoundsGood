class ChangeCommentsReplyid < ActiveRecord::Migration[6.0]
  def change
    change_column_default :comments, :reply_id, from: 0, to: nil
  end
end
