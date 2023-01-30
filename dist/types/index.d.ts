declare const _default: Pick<
    Pick<
        Pick<
            import("./core").MediumLightboxCore,
            | "state"
            | "active"
            | "_flip"
            | "_raf"
            | "getOptions"
            | "close"
            | "replaceLightboxDOM"
            | "generateLightbox"
            | "_highResLoaded"
            | "attachListeners"
            | "detachListeners"
            | "_onScroll"
            | "onScroll"
            | "_onKeyDown"
            | "onKeyDown"
        > &
            Pick<
                {
                    defaultLightboxGenerator: (
                        $copiedImg: HTMLElement,
                        opts: import("./types").ImageOptions &
                            import("./caption/caption").CaptionOptions,
                        $original: HTMLElement
                    ) => HTMLElement;
                    setOptions: (
                        options: Partial<import("./types").GlobalOptions> &
                            Partial<import("./caption/caption").CaptionOptions>
                    ) => void;
                    optsFromElm: (
                        $elm: HTMLElement
                    ) => import("./types").ImageOptions &
                        import("./caption/caption").CaptionOptions;
                    open: (
                        $img: import("./types").YamzElement,
                        opts?:
                            | (import("./types").ImageOptions &
                                  import("./caption/caption").CaptionOptions)
                            | undefined
                    ) => Promise<HTMLElement>;
                    replace: (
                        $img: import("./types").YamzElement,
                        opts?:
                            | (import("./types").ImageOptions &
                                  import("./caption/caption").CaptionOptions)
                            | undefined
                    ) => void;
                    bind: (
                        $imgs: string | HTMLElement | HTMLElement[],
                        opts?:
                            | (import("./types").ImageOptions &
                                  import("./caption/caption").CaptionOptions)
                            | undefined
                    ) => void;
                    options: import("./types").GlobalOptions &
                        import("./caption/caption").CaptionOptions;
                },
                | "defaultLightboxGenerator"
                | "setOptions"
                | "optsFromElm"
                | "open"
                | "replace"
                | "bind"
                | "options"
            > &
            import("./caption/caption").Captioned,
        | "state"
        | "active"
        | "_flip"
        | "_raf"
        | "getOptions"
        | "close"
        | "replaceLightboxDOM"
        | "generateLightbox"
        | "_highResLoaded"
        | "attachListeners"
        | "detachListeners"
        | "_onScroll"
        | "onScroll"
        | "_onKeyDown"
        | "onKeyDown"
    > &
        Pick<
            {
                defaultLightboxGenerator: (
                    $copiedImg: HTMLElement,
                    opts: import("./types").ImageOptions &
                        import("./caption/caption").CaptionOptions &
                        import("./album/album").AlbumOptions<
                            Pick<
                                import("./core").MediumLightboxCore,
                                | "state"
                                | "active"
                                | "_flip"
                                | "_raf"
                                | "getOptions"
                                | "close"
                                | "replaceLightboxDOM"
                                | "generateLightbox"
                                | "_highResLoaded"
                                | "attachListeners"
                                | "detachListeners"
                                | "_onScroll"
                                | "onScroll"
                                | "_onKeyDown"
                                | "onKeyDown"
                            > &
                                Pick<
                                    {
                                        defaultLightboxGenerator: (
                                            $copiedImg: HTMLElement,
                                            opts: import("./types").ImageOptions &
                                                import("./caption/caption").CaptionOptions,
                                            $original: HTMLElement
                                        ) => HTMLElement;
                                        setOptions: (
                                            options: Partial<import("./types").GlobalOptions> &
                                                Partial<import("./caption/caption").CaptionOptions>
                                        ) => void;
                                        optsFromElm: (
                                            $elm: HTMLElement
                                        ) => import("./types").ImageOptions &
                                            import("./caption/caption").CaptionOptions;
                                        open: (
                                            $img: import("./types").YamzElement,
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => Promise<HTMLElement>;
                                        replace: (
                                            $img: import("./types").YamzElement,
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => void;
                                        bind: (
                                            $imgs: string | HTMLElement | HTMLElement[],
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => void;
                                        options: import("./types").GlobalOptions &
                                            import("./caption/caption").CaptionOptions;
                                    },
                                    | "defaultLightboxGenerator"
                                    | "setOptions"
                                    | "optsFromElm"
                                    | "open"
                                    | "replace"
                                    | "bind"
                                    | "options"
                                > &
                                import("./caption/caption").Captioned
                        >,
                    $original: HTMLElement
                ) => HTMLElement;
                setOptions: (
                    options: Partial<import("./types").GlobalOptions> &
                        Partial<import("./caption/caption").CaptionOptions> &
                        Partial<
                            import("./album/album").AlbumOptions<
                                Pick<
                                    import("./core").MediumLightboxCore,
                                    | "state"
                                    | "active"
                                    | "_flip"
                                    | "_raf"
                                    | "getOptions"
                                    | "close"
                                    | "replaceLightboxDOM"
                                    | "generateLightbox"
                                    | "_highResLoaded"
                                    | "attachListeners"
                                    | "detachListeners"
                                    | "_onScroll"
                                    | "onScroll"
                                    | "_onKeyDown"
                                    | "onKeyDown"
                                > &
                                    Pick<
                                        {
                                            defaultLightboxGenerator: (
                                                $copiedImg: HTMLElement,
                                                opts: import("./types").ImageOptions &
                                                    import("./caption/caption").CaptionOptions,
                                                $original: HTMLElement
                                            ) => HTMLElement;
                                            setOptions: (
                                                options: Partial<import("./types").GlobalOptions> &
                                                    Partial<
                                                        import("./caption/caption").CaptionOptions
                                                    >
                                            ) => void;
                                            optsFromElm: (
                                                $elm: HTMLElement
                                            ) => import("./types").ImageOptions &
                                                import("./caption/caption").CaptionOptions;
                                            open: (
                                                $img: import("./types").YamzElement,
                                                opts?:
                                                    | (import("./types").ImageOptions &
                                                          import("./caption/caption").CaptionOptions)
                                                    | undefined
                                            ) => Promise<HTMLElement>;
                                            replace: (
                                                $img: import("./types").YamzElement,
                                                opts?:
                                                    | (import("./types").ImageOptions &
                                                          import("./caption/caption").CaptionOptions)
                                                    | undefined
                                            ) => void;
                                            bind: (
                                                $imgs: string | HTMLElement | HTMLElement[],
                                                opts?:
                                                    | (import("./types").ImageOptions &
                                                          import("./caption/caption").CaptionOptions)
                                                    | undefined
                                            ) => void;
                                            options: import("./types").GlobalOptions &
                                                import("./caption/caption").CaptionOptions;
                                        },
                                        | "defaultLightboxGenerator"
                                        | "setOptions"
                                        | "optsFromElm"
                                        | "open"
                                        | "replace"
                                        | "bind"
                                        | "options"
                                    > &
                                    import("./caption/caption").Captioned
                            >
                        >
                ) => void;
                optsFromElm: (
                    $elm: HTMLElement
                ) => import("./types").ImageOptions &
                    import("./caption/caption").CaptionOptions &
                    import("./album/album").AlbumOptions<
                        Pick<
                            import("./core").MediumLightboxCore,
                            | "state"
                            | "active"
                            | "_flip"
                            | "_raf"
                            | "getOptions"
                            | "close"
                            | "replaceLightboxDOM"
                            | "generateLightbox"
                            | "_highResLoaded"
                            | "attachListeners"
                            | "detachListeners"
                            | "_onScroll"
                            | "onScroll"
                            | "_onKeyDown"
                            | "onKeyDown"
                        > &
                            Pick<
                                {
                                    defaultLightboxGenerator: (
                                        $copiedImg: HTMLElement,
                                        opts: import("./types").ImageOptions &
                                            import("./caption/caption").CaptionOptions,
                                        $original: HTMLElement
                                    ) => HTMLElement;
                                    setOptions: (
                                        options: Partial<import("./types").GlobalOptions> &
                                            Partial<import("./caption/caption").CaptionOptions>
                                    ) => void;
                                    optsFromElm: (
                                        $elm: HTMLElement
                                    ) => import("./types").ImageOptions &
                                        import("./caption/caption").CaptionOptions;
                                    open: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => Promise<HTMLElement>;
                                    replace: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    bind: (
                                        $imgs: string | HTMLElement | HTMLElement[],
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    options: import("./types").GlobalOptions &
                                        import("./caption/caption").CaptionOptions;
                                },
                                | "defaultLightboxGenerator"
                                | "setOptions"
                                | "optsFromElm"
                                | "open"
                                | "replace"
                                | "bind"
                                | "options"
                            > &
                            import("./caption/caption").Captioned
                    >;
                open: (
                    $img: import("./types").YamzElement,
                    opts?:
                        | (import("./types").ImageOptions &
                              import("./caption/caption").CaptionOptions &
                              import("./album/album").AlbumOptions<
                                  Pick<
                                      import("./core").MediumLightboxCore,
                                      | "state"
                                      | "active"
                                      | "_flip"
                                      | "_raf"
                                      | "getOptions"
                                      | "close"
                                      | "replaceLightboxDOM"
                                      | "generateLightbox"
                                      | "_highResLoaded"
                                      | "attachListeners"
                                      | "detachListeners"
                                      | "_onScroll"
                                      | "onScroll"
                                      | "_onKeyDown"
                                      | "onKeyDown"
                                  > &
                                      Pick<
                                          {
                                              defaultLightboxGenerator: (
                                                  $copiedImg: HTMLElement,
                                                  opts: import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions,
                                                  $original: HTMLElement
                                              ) => HTMLElement;
                                              setOptions: (
                                                  options: Partial<
                                                      import("./types").GlobalOptions
                                                  > &
                                                      Partial<
                                                          import("./caption/caption").CaptionOptions
                                                      >
                                              ) => void;
                                              optsFromElm: (
                                                  $elm: HTMLElement
                                              ) => import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions;
                                              open: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => Promise<HTMLElement>;
                                              replace: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              bind: (
                                                  $imgs: string | HTMLElement | HTMLElement[],
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              options: import("./types").GlobalOptions &
                                                  import("./caption/caption").CaptionOptions;
                                          },
                                          | "defaultLightboxGenerator"
                                          | "setOptions"
                                          | "optsFromElm"
                                          | "open"
                                          | "replace"
                                          | "bind"
                                          | "options"
                                      > &
                                      import("./caption/caption").Captioned
                              >)
                        | undefined
                ) => Promise<HTMLElement>;
                replace: (
                    $img: import("./types").YamzElement,
                    opts?:
                        | (import("./types").ImageOptions &
                              import("./caption/caption").CaptionOptions &
                              import("./album/album").AlbumOptions<
                                  Pick<
                                      import("./core").MediumLightboxCore,
                                      | "state"
                                      | "active"
                                      | "_flip"
                                      | "_raf"
                                      | "getOptions"
                                      | "close"
                                      | "replaceLightboxDOM"
                                      | "generateLightbox"
                                      | "_highResLoaded"
                                      | "attachListeners"
                                      | "detachListeners"
                                      | "_onScroll"
                                      | "onScroll"
                                      | "_onKeyDown"
                                      | "onKeyDown"
                                  > &
                                      Pick<
                                          {
                                              defaultLightboxGenerator: (
                                                  $copiedImg: HTMLElement,
                                                  opts: import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions,
                                                  $original: HTMLElement
                                              ) => HTMLElement;
                                              setOptions: (
                                                  options: Partial<
                                                      import("./types").GlobalOptions
                                                  > &
                                                      Partial<
                                                          import("./caption/caption").CaptionOptions
                                                      >
                                              ) => void;
                                              optsFromElm: (
                                                  $elm: HTMLElement
                                              ) => import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions;
                                              open: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => Promise<HTMLElement>;
                                              replace: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              bind: (
                                                  $imgs: string | HTMLElement | HTMLElement[],
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              options: import("./types").GlobalOptions &
                                                  import("./caption/caption").CaptionOptions;
                                          },
                                          | "defaultLightboxGenerator"
                                          | "setOptions"
                                          | "optsFromElm"
                                          | "open"
                                          | "replace"
                                          | "bind"
                                          | "options"
                                      > &
                                      import("./caption/caption").Captioned
                              >)
                        | undefined
                ) => void;
                bind: (
                    $imgs: string | HTMLElement | HTMLElement[],
                    opts?:
                        | (import("./types").ImageOptions &
                              import("./caption/caption").CaptionOptions &
                              import("./album/album").AlbumOptions<
                                  Pick<
                                      import("./core").MediumLightboxCore,
                                      | "state"
                                      | "active"
                                      | "_flip"
                                      | "_raf"
                                      | "getOptions"
                                      | "close"
                                      | "replaceLightboxDOM"
                                      | "generateLightbox"
                                      | "_highResLoaded"
                                      | "attachListeners"
                                      | "detachListeners"
                                      | "_onScroll"
                                      | "onScroll"
                                      | "_onKeyDown"
                                      | "onKeyDown"
                                  > &
                                      Pick<
                                          {
                                              defaultLightboxGenerator: (
                                                  $copiedImg: HTMLElement,
                                                  opts: import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions,
                                                  $original: HTMLElement
                                              ) => HTMLElement;
                                              setOptions: (
                                                  options: Partial<
                                                      import("./types").GlobalOptions
                                                  > &
                                                      Partial<
                                                          import("./caption/caption").CaptionOptions
                                                      >
                                              ) => void;
                                              optsFromElm: (
                                                  $elm: HTMLElement
                                              ) => import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions;
                                              open: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => Promise<HTMLElement>;
                                              replace: (
                                                  $img: import("./types").YamzElement,
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              bind: (
                                                  $imgs: string | HTMLElement | HTMLElement[],
                                                  opts?:
                                                      | (import("./types").ImageOptions &
                                                            import("./caption/caption").CaptionOptions)
                                                      | undefined
                                              ) => void;
                                              options: import("./types").GlobalOptions &
                                                  import("./caption/caption").CaptionOptions;
                                          },
                                          | "defaultLightboxGenerator"
                                          | "setOptions"
                                          | "optsFromElm"
                                          | "open"
                                          | "replace"
                                          | "bind"
                                          | "options"
                                      > &
                                      import("./caption/caption").Captioned
                              >)
                        | undefined
                ) => void;
                options: import("./types").GlobalOptions &
                    import("./caption/caption").CaptionOptions &
                    import("./album/album").AlbumOptions<
                        Pick<
                            import("./core").MediumLightboxCore,
                            | "state"
                            | "active"
                            | "_flip"
                            | "_raf"
                            | "getOptions"
                            | "close"
                            | "replaceLightboxDOM"
                            | "generateLightbox"
                            | "_highResLoaded"
                            | "attachListeners"
                            | "detachListeners"
                            | "_onScroll"
                            | "onScroll"
                            | "_onKeyDown"
                            | "onKeyDown"
                        > &
                            Pick<
                                {
                                    defaultLightboxGenerator: (
                                        $copiedImg: HTMLElement,
                                        opts: import("./types").ImageOptions &
                                            import("./caption/caption").CaptionOptions,
                                        $original: HTMLElement
                                    ) => HTMLElement;
                                    setOptions: (
                                        options: Partial<import("./types").GlobalOptions> &
                                            Partial<import("./caption/caption").CaptionOptions>
                                    ) => void;
                                    optsFromElm: (
                                        $elm: HTMLElement
                                    ) => import("./types").ImageOptions &
                                        import("./caption/caption").CaptionOptions;
                                    open: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => Promise<HTMLElement>;
                                    replace: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    bind: (
                                        $imgs: string | HTMLElement | HTMLElement[],
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    options: import("./types").GlobalOptions &
                                        import("./caption/caption").CaptionOptions;
                                },
                                | "defaultLightboxGenerator"
                                | "setOptions"
                                | "optsFromElm"
                                | "open"
                                | "replace"
                                | "bind"
                                | "options"
                            > &
                            import("./caption/caption").Captioned
                    >;
            },
            | "defaultLightboxGenerator"
            | "setOptions"
            | "optsFromElm"
            | "open"
            | "replace"
            | "bind"
            | "options"
        > &
        import("./album/album").Albumed<
            Pick<
                import("./core").MediumLightboxCore,
                | "state"
                | "active"
                | "_flip"
                | "_raf"
                | "getOptions"
                | "close"
                | "replaceLightboxDOM"
                | "generateLightbox"
                | "_highResLoaded"
                | "attachListeners"
                | "detachListeners"
                | "_onScroll"
                | "onScroll"
                | "_onKeyDown"
                | "onKeyDown"
            > &
                Pick<
                    {
                        defaultLightboxGenerator: (
                            $copiedImg: HTMLElement,
                            opts: import("./types").ImageOptions &
                                import("./caption/caption").CaptionOptions,
                            $original: HTMLElement
                        ) => HTMLElement;
                        setOptions: (
                            options: Partial<import("./types").GlobalOptions> &
                                Partial<import("./caption/caption").CaptionOptions>
                        ) => void;
                        optsFromElm: (
                            $elm: HTMLElement
                        ) => import("./types").ImageOptions &
                            import("./caption/caption").CaptionOptions;
                        open: (
                            $img: import("./types").YamzElement,
                            opts?:
                                | (import("./types").ImageOptions &
                                      import("./caption/caption").CaptionOptions)
                                | undefined
                        ) => Promise<HTMLElement>;
                        replace: (
                            $img: import("./types").YamzElement,
                            opts?:
                                | (import("./types").ImageOptions &
                                      import("./caption/caption").CaptionOptions)
                                | undefined
                        ) => void;
                        bind: (
                            $imgs: string | HTMLElement | HTMLElement[],
                            opts?:
                                | (import("./types").ImageOptions &
                                      import("./caption/caption").CaptionOptions)
                                | undefined
                        ) => void;
                        options: import("./types").GlobalOptions &
                            import("./caption/caption").CaptionOptions;
                    },
                    | "defaultLightboxGenerator"
                    | "setOptions"
                    | "optsFromElm"
                    | "open"
                    | "replace"
                    | "bind"
                    | "options"
                > &
                import("./caption/caption").Captioned
        >,
    | "moveToAlbumEntry"
    | "state"
    | "active"
    | "_flip"
    | "_raf"
    | "getOptions"
    | "close"
    | "replaceLightboxDOM"
    | "generateLightbox"
    | "_highResLoaded"
    | "attachListeners"
    | "detachListeners"
    | "_onScroll"
    | "onScroll"
    | "_onKeyDown"
    | "onKeyDown"
> &
    Pick<
        {
            defaultLightboxGenerator: (
                $copiedImg: HTMLElement,
                opts: import("./types").ImageOptions &
                    import("./caption/caption").CaptionOptions &
                    import("./album/album").AlbumOptions<
                        Pick<
                            import("./core").MediumLightboxCore,
                            | "state"
                            | "active"
                            | "_flip"
                            | "_raf"
                            | "getOptions"
                            | "close"
                            | "replaceLightboxDOM"
                            | "generateLightbox"
                            | "_highResLoaded"
                            | "attachListeners"
                            | "detachListeners"
                            | "_onScroll"
                            | "onScroll"
                            | "_onKeyDown"
                            | "onKeyDown"
                        > &
                            Pick<
                                {
                                    defaultLightboxGenerator: (
                                        $copiedImg: HTMLElement,
                                        opts: import("./types").ImageOptions &
                                            import("./caption/caption").CaptionOptions,
                                        $original: HTMLElement
                                    ) => HTMLElement;
                                    setOptions: (
                                        options: Partial<import("./types").GlobalOptions> &
                                            Partial<import("./caption/caption").CaptionOptions>
                                    ) => void;
                                    optsFromElm: (
                                        $elm: HTMLElement
                                    ) => import("./types").ImageOptions &
                                        import("./caption/caption").CaptionOptions;
                                    open: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => Promise<HTMLElement>;
                                    replace: (
                                        $img: import("./types").YamzElement,
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    bind: (
                                        $imgs: string | HTMLElement | HTMLElement[],
                                        opts?:
                                            | (import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions)
                                            | undefined
                                    ) => void;
                                    options: import("./types").GlobalOptions &
                                        import("./caption/caption").CaptionOptions;
                                },
                                | "defaultLightboxGenerator"
                                | "setOptions"
                                | "optsFromElm"
                                | "open"
                                | "replace"
                                | "bind"
                                | "options"
                            > &
                            import("./caption/caption").Captioned
                    > &
                    import("./swipe/swipe").SwipeOptions,
                $original: HTMLElement
            ) => HTMLElement;
            setOptions: (
                options: Partial<import("./types").GlobalOptions> &
                    Partial<import("./caption/caption").CaptionOptions> &
                    Partial<
                        import("./album/album").AlbumOptions<
                            Pick<
                                import("./core").MediumLightboxCore,
                                | "state"
                                | "active"
                                | "_flip"
                                | "_raf"
                                | "getOptions"
                                | "close"
                                | "replaceLightboxDOM"
                                | "generateLightbox"
                                | "_highResLoaded"
                                | "attachListeners"
                                | "detachListeners"
                                | "_onScroll"
                                | "onScroll"
                                | "_onKeyDown"
                                | "onKeyDown"
                            > &
                                Pick<
                                    {
                                        defaultLightboxGenerator: (
                                            $copiedImg: HTMLElement,
                                            opts: import("./types").ImageOptions &
                                                import("./caption/caption").CaptionOptions,
                                            $original: HTMLElement
                                        ) => HTMLElement;
                                        setOptions: (
                                            options: Partial<import("./types").GlobalOptions> &
                                                Partial<import("./caption/caption").CaptionOptions>
                                        ) => void;
                                        optsFromElm: (
                                            $elm: HTMLElement
                                        ) => import("./types").ImageOptions &
                                            import("./caption/caption").CaptionOptions;
                                        open: (
                                            $img: import("./types").YamzElement,
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => Promise<HTMLElement>;
                                        replace: (
                                            $img: import("./types").YamzElement,
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => void;
                                        bind: (
                                            $imgs: string | HTMLElement | HTMLElement[],
                                            opts?:
                                                | (import("./types").ImageOptions &
                                                      import("./caption/caption").CaptionOptions)
                                                | undefined
                                        ) => void;
                                        options: import("./types").GlobalOptions &
                                            import("./caption/caption").CaptionOptions;
                                    },
                                    | "defaultLightboxGenerator"
                                    | "setOptions"
                                    | "optsFromElm"
                                    | "open"
                                    | "replace"
                                    | "bind"
                                    | "options"
                                > &
                                import("./caption/caption").Captioned
                        >
                    > &
                    Partial<import("./swipe/swipe").SwipeOptions>
            ) => void;
            optsFromElm: (
                $elm: HTMLElement
            ) => import("./types").ImageOptions &
                import("./caption/caption").CaptionOptions &
                import("./album/album").AlbumOptions<
                    Pick<
                        import("./core").MediumLightboxCore,
                        | "state"
                        | "active"
                        | "_flip"
                        | "_raf"
                        | "getOptions"
                        | "close"
                        | "replaceLightboxDOM"
                        | "generateLightbox"
                        | "_highResLoaded"
                        | "attachListeners"
                        | "detachListeners"
                        | "_onScroll"
                        | "onScroll"
                        | "_onKeyDown"
                        | "onKeyDown"
                    > &
                        Pick<
                            {
                                defaultLightboxGenerator: (
                                    $copiedImg: HTMLElement,
                                    opts: import("./types").ImageOptions &
                                        import("./caption/caption").CaptionOptions,
                                    $original: HTMLElement
                                ) => HTMLElement;
                                setOptions: (
                                    options: Partial<import("./types").GlobalOptions> &
                                        Partial<import("./caption/caption").CaptionOptions>
                                ) => void;
                                optsFromElm: (
                                    $elm: HTMLElement
                                ) => import("./types").ImageOptions &
                                    import("./caption/caption").CaptionOptions;
                                open: (
                                    $img: import("./types").YamzElement,
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => Promise<HTMLElement>;
                                replace: (
                                    $img: import("./types").YamzElement,
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => void;
                                bind: (
                                    $imgs: string | HTMLElement | HTMLElement[],
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => void;
                                options: import("./types").GlobalOptions &
                                    import("./caption/caption").CaptionOptions;
                            },
                            | "defaultLightboxGenerator"
                            | "setOptions"
                            | "optsFromElm"
                            | "open"
                            | "replace"
                            | "bind"
                            | "options"
                        > &
                        import("./caption/caption").Captioned
                > &
                import("./swipe/swipe").SwipeOptions;
            open: (
                $img: import("./types").YamzElement,
                opts?:
                    | (import("./types").ImageOptions &
                          import("./caption/caption").CaptionOptions &
                          import("./album/album").AlbumOptions<
                              Pick<
                                  import("./core").MediumLightboxCore,
                                  | "state"
                                  | "active"
                                  | "_flip"
                                  | "_raf"
                                  | "getOptions"
                                  | "close"
                                  | "replaceLightboxDOM"
                                  | "generateLightbox"
                                  | "_highResLoaded"
                                  | "attachListeners"
                                  | "detachListeners"
                                  | "_onScroll"
                                  | "onScroll"
                                  | "_onKeyDown"
                                  | "onKeyDown"
                              > &
                                  Pick<
                                      {
                                          defaultLightboxGenerator: (
                                              $copiedImg: HTMLElement,
                                              opts: import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions,
                                              $original: HTMLElement
                                          ) => HTMLElement;
                                          setOptions: (
                                              options: Partial<import("./types").GlobalOptions> &
                                                  Partial<
                                                      import("./caption/caption").CaptionOptions
                                                  >
                                          ) => void;
                                          optsFromElm: (
                                              $elm: HTMLElement
                                          ) => import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions;
                                          open: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => Promise<HTMLElement>;
                                          replace: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          bind: (
                                              $imgs: string | HTMLElement | HTMLElement[],
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          options: import("./types").GlobalOptions &
                                              import("./caption/caption").CaptionOptions;
                                      },
                                      | "defaultLightboxGenerator"
                                      | "setOptions"
                                      | "optsFromElm"
                                      | "open"
                                      | "replace"
                                      | "bind"
                                      | "options"
                                  > &
                                  import("./caption/caption").Captioned
                          > &
                          import("./swipe/swipe").SwipeOptions)
                    | undefined
            ) => Promise<HTMLElement>;
            replace: (
                $img: import("./types").YamzElement,
                opts?:
                    | (import("./types").ImageOptions &
                          import("./caption/caption").CaptionOptions &
                          import("./album/album").AlbumOptions<
                              Pick<
                                  import("./core").MediumLightboxCore,
                                  | "state"
                                  | "active"
                                  | "_flip"
                                  | "_raf"
                                  | "getOptions"
                                  | "close"
                                  | "replaceLightboxDOM"
                                  | "generateLightbox"
                                  | "_highResLoaded"
                                  | "attachListeners"
                                  | "detachListeners"
                                  | "_onScroll"
                                  | "onScroll"
                                  | "_onKeyDown"
                                  | "onKeyDown"
                              > &
                                  Pick<
                                      {
                                          defaultLightboxGenerator: (
                                              $copiedImg: HTMLElement,
                                              opts: import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions,
                                              $original: HTMLElement
                                          ) => HTMLElement;
                                          setOptions: (
                                              options: Partial<import("./types").GlobalOptions> &
                                                  Partial<
                                                      import("./caption/caption").CaptionOptions
                                                  >
                                          ) => void;
                                          optsFromElm: (
                                              $elm: HTMLElement
                                          ) => import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions;
                                          open: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => Promise<HTMLElement>;
                                          replace: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          bind: (
                                              $imgs: string | HTMLElement | HTMLElement[],
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          options: import("./types").GlobalOptions &
                                              import("./caption/caption").CaptionOptions;
                                      },
                                      | "defaultLightboxGenerator"
                                      | "setOptions"
                                      | "optsFromElm"
                                      | "open"
                                      | "replace"
                                      | "bind"
                                      | "options"
                                  > &
                                  import("./caption/caption").Captioned
                          > &
                          import("./swipe/swipe").SwipeOptions)
                    | undefined
            ) => void;
            bind: (
                $imgs: string | HTMLElement | HTMLElement[],
                opts?:
                    | (import("./types").ImageOptions &
                          import("./caption/caption").CaptionOptions &
                          import("./album/album").AlbumOptions<
                              Pick<
                                  import("./core").MediumLightboxCore,
                                  | "state"
                                  | "active"
                                  | "_flip"
                                  | "_raf"
                                  | "getOptions"
                                  | "close"
                                  | "replaceLightboxDOM"
                                  | "generateLightbox"
                                  | "_highResLoaded"
                                  | "attachListeners"
                                  | "detachListeners"
                                  | "_onScroll"
                                  | "onScroll"
                                  | "_onKeyDown"
                                  | "onKeyDown"
                              > &
                                  Pick<
                                      {
                                          defaultLightboxGenerator: (
                                              $copiedImg: HTMLElement,
                                              opts: import("./types").ImageOptions &
                                                  import("./caption/caption").CaptionOptions,
                                              $original: HTMLElement
                                          ) => HTMLElement;
                                          setOptions: (
                                              options: Partial<import("./types").GlobalOptions> &
                                                  Partial<
                                                      import("./caption/caption").CaptionOptions
                                                  >
                                          ) => void;
                                          optsFromElm: (
                                              $elm: HTMLElement
                                          ) => import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions;
                                          open: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => Promise<HTMLElement>;
                                          replace: (
                                              $img: import("./types").YamzElement,
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          bind: (
                                              $imgs: string | HTMLElement | HTMLElement[],
                                              opts?:
                                                  | (import("./types").ImageOptions &
                                                        import("./caption/caption").CaptionOptions)
                                                  | undefined
                                          ) => void;
                                          options: import("./types").GlobalOptions &
                                              import("./caption/caption").CaptionOptions;
                                      },
                                      | "defaultLightboxGenerator"
                                      | "setOptions"
                                      | "optsFromElm"
                                      | "open"
                                      | "replace"
                                      | "bind"
                                      | "options"
                                  > &
                                  import("./caption/caption").Captioned
                          > &
                          import("./swipe/swipe").SwipeOptions)
                    | undefined
            ) => void;
            options: import("./types").GlobalOptions &
                import("./caption/caption").CaptionOptions &
                import("./album/album").AlbumOptions<
                    Pick<
                        import("./core").MediumLightboxCore,
                        | "state"
                        | "active"
                        | "_flip"
                        | "_raf"
                        | "getOptions"
                        | "close"
                        | "replaceLightboxDOM"
                        | "generateLightbox"
                        | "_highResLoaded"
                        | "attachListeners"
                        | "detachListeners"
                        | "_onScroll"
                        | "onScroll"
                        | "_onKeyDown"
                        | "onKeyDown"
                    > &
                        Pick<
                            {
                                defaultLightboxGenerator: (
                                    $copiedImg: HTMLElement,
                                    opts: import("./types").ImageOptions &
                                        import("./caption/caption").CaptionOptions,
                                    $original: HTMLElement
                                ) => HTMLElement;
                                setOptions: (
                                    options: Partial<import("./types").GlobalOptions> &
                                        Partial<import("./caption/caption").CaptionOptions>
                                ) => void;
                                optsFromElm: (
                                    $elm: HTMLElement
                                ) => import("./types").ImageOptions &
                                    import("./caption/caption").CaptionOptions;
                                open: (
                                    $img: import("./types").YamzElement,
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => Promise<HTMLElement>;
                                replace: (
                                    $img: import("./types").YamzElement,
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => void;
                                bind: (
                                    $imgs: string | HTMLElement | HTMLElement[],
                                    opts?:
                                        | (import("./types").ImageOptions &
                                              import("./caption/caption").CaptionOptions)
                                        | undefined
                                ) => void;
                                options: import("./types").GlobalOptions &
                                    import("./caption/caption").CaptionOptions;
                            },
                            | "defaultLightboxGenerator"
                            | "setOptions"
                            | "optsFromElm"
                            | "open"
                            | "replace"
                            | "bind"
                            | "options"
                        > &
                        import("./caption/caption").Captioned
                > &
                import("./swipe/swipe").SwipeOptions;
        },
        | "defaultLightboxGenerator"
        | "setOptions"
        | "optsFromElm"
        | "open"
        | "replace"
        | "bind"
        | "options"
    > &
    import("./swipe/swipe").Swipeable;
export default _default;
