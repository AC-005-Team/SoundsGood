require "shrine"
require "shrine/storage/file_system"
require "shrine/storage/s3"

s3_options = {
    access_key_id:      ENV['ACCESS_KEY_ID'],
    secret_access_key:  ENV['SECRET_ACCESS_KEY'],
    region:             ENV['REGION'],
    bucket:             ENV['BUCKET']
}

Shrine.storages = {
    cache: Shrine::Storage::FileSystem.new("tmp/uploads"),
    store: Shrine::Storage::S3.new(upload_options: {acl: "public-read"}, prefix: "store",
                                   **s3_options),
}

Shrine.plugin :activerecord
