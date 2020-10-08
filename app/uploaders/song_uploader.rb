class SongUploader < ApplicationUploader
  plugin :add_metadata

  add_metadata do |io, context|
    audio = Shrine.with_file(io) { |file| FFMPEG::Movie.new(file.path) }
    { "duration"   => audio.duration
    }
  end
  Attacher.validate do
    validate_mime_type %w[audio/mp3 audio/ogg audio/mpeg audio/m4a], message: "must be audio/mp3 audio/ogg audio/mpeg audio/m4a"
  end
end
