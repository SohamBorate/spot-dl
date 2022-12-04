# spot-dl
A command line tool which downloads music from YouTube
and applies Spotify metadata to it, basically Spotify
Premium free of cost... kinda.

## Set Spotify app credentials

-   Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications)
    and create an app.

-   Copy the `clientId` and the `clientSecret`.

-   And set the credentials...
    ```
    >>> spot-dl set --clientId <clientId> --clientSecret <clientSecret>
    ```

Please not that this step is very important, without the
credentials you can't use this tool.
## Download music

This is very easy to do...
```
>>> spot-dl download <spotify url>
```

`spotify url` could be the URL of an album, track, playlist.
Or even an artist.

Entering the URL to an artist will download all the songs
created by the artists.