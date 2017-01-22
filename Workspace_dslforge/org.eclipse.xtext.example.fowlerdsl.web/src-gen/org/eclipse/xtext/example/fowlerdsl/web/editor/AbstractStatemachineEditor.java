/**
 * @Generated by DSLFORGE
 */
package org.eclipse.xtext.example.fowlerdsl.web.editor;

import org.dslforge.styledtext.BasicText;
import org.dslforge.xtext.common.XtextContentAssistEnabledEditor;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.xtext.example.fowlerdsl.web.editor.widget.Statemachine;
import org.eclipse.xtext.example.fowlerdsl.web.internal.Activator;

public abstract class AbstractStatemachineEditor extends XtextContentAssistEnabledEditor {

	public AbstractStatemachineEditor() {
		super();
		setLanguageName(Activator.ORG_ECLIPSE_XTEXT_EXAMPLE_FOWLERDSL_STATEMACHINE);
		setInjector(Activator.getInstance().getInjector(Activator.ORG_ECLIPSE_XTEXT_EXAMPLE_FOWLERDSL_STATEMACHINE));
	}
	
	@Override
	protected BasicText createTextWidget(Composite parent, int styles) {
		Statemachine statemachineWidget = new Statemachine(parent, styles);
		GridData textLayoutData = new GridData();
		textLayoutData.horizontalAlignment = SWT.FILL;
		textLayoutData.verticalAlignment = SWT.FILL;
		textLayoutData.grabExcessHorizontalSpace = true;
		textLayoutData.grabExcessVerticalSpace = true;
		statemachineWidget.setLayoutData(textLayoutData);
		statemachineWidget.setEditable(true);
		return statemachineWidget;
	}
}
