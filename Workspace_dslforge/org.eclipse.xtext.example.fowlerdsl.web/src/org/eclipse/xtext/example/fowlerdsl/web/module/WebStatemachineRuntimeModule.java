/**
 * @Generated by DSLFORGE
 */
package org.eclipse.xtext.example.fowlerdsl.web.module;

import org.apache.log4j.Logger;

import com.google.inject.Binder;

public class WebStatemachineRuntimeModule extends AbstractWebStatemachineRuntimeModule {

	static final Logger logger = Logger.getLogger(WebStatemachineRuntimeModule.class);
	
	/**
	 * Add Custom bindings here
	 */
	@Override
	public void configure(Binder binder) {
		super.configure(binder);
		logger.info("Configuring web module " + this.getClass().getName());
	}
}