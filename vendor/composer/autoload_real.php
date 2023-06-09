<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitb2ad1e228ddbb5b2a8b59935b2adf441
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        require __DIR__ . '/platform_check.php';

        spl_autoload_register(array('ComposerAutoloaderInitb2ad1e228ddbb5b2a8b59935b2adf441', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitb2ad1e228ddbb5b2a8b59935b2adf441', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitb2ad1e228ddbb5b2a8b59935b2adf441::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}
