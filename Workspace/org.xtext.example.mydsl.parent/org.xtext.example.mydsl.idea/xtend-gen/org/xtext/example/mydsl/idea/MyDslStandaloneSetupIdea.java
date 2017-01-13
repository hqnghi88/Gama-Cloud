/**
 * generated by Xtext 2.10.0
 */
package org.xtext.example.mydsl.idea;

import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import org.eclipse.xtext.util.Modules2;
import org.xtext.example.mydsl.MyDslRuntimeModule;
import org.xtext.example.mydsl.MyDslStandaloneSetupGenerated;
import org.xtext.example.mydsl.idea.MyDslIdeaModule;

@SuppressWarnings("all")
public class MyDslStandaloneSetupIdea extends MyDslStandaloneSetupGenerated {
  @Override
  public Injector createInjector() {
    final MyDslRuntimeModule runtimeModule = new MyDslRuntimeModule();
    final MyDslIdeaModule ideaModule = new MyDslIdeaModule();
    final Module mergedModule = Modules2.mixin(runtimeModule, ideaModule);
    return Guice.createInjector(mergedModule);
  }
}