class ImageUploader < ApplicationUploader
  Attacher.validate do
    validate_mime_type %w[image/jpeg image/png image/webp], message: "must be image/jpeg image/png image/webp"
  end
end
