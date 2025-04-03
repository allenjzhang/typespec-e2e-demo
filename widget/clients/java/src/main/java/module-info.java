module demoservice {
    requires transitive io.clientcore.core;

    exports demoservice;

    opens demoservice to io.clientcore.core;
}
