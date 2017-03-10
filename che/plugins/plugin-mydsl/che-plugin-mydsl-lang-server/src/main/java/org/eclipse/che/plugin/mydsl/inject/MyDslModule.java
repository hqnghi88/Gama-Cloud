package org.eclipse.che.plugin.mydsl.inject;

import com.google.inject.AbstractModule;
import com.google.inject.multibindings.Multibinder;

import org.eclipse.che.inject.DynaModule;
import org.eclipse.che.plugin.mydsl.languageserver.MyDslLanguageServerLauncher;
import org.eclipse.che.api.languageserver.launcher.LanguageServerLauncher;

@DynaModule
public class MyDslModule extends AbstractModule {
    @Override
    protected void configure() {
        Multibinder.newSetBinder(binder(), LanguageServerLauncher.class).addBinding().to(MyDslLanguageServerLauncher.class);
    }
}
