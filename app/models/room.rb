class Room < ApplicationRecord
  belongs_to :user

  before_create do
    opentok = OpenTok::OpenTok.new Rails.application.credentials.vonage_api_key, Rails.application.credentials.vonage_api_secret
    # session = opentok.create_session media_mode: :routed
    session = opentok.create_session archive_mode: :always, media_mode: :routed
    self.session_id = session.session_id
  end
end
