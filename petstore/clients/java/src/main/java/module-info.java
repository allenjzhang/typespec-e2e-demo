module petstore {
    requires transitive io.clientcore.core;

    exports petstore;

    opens petstore to io.clientcore.core;
}
