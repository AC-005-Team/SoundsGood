json.extract! room, :id, :name, :session_id, :created_at, :updated_at
json.url room_url(room, format: :json)
