class SongUploader < ApplicationUploader
  Attacher.validate do
    validate_mime_type %w[audio/mp3 audio/ogg audio/mpeg], message: "must be audio/mp3 audio/ogg audio/mpeg audio/m4a"
  end
end
