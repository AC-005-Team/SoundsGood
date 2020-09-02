class ApplicationUploader < Shrine
  plugin :validation_helpers
  plugin :remove_invalid
  plugin :pretty_location

end