/*
 * generated by Xtext 2.10.0
 */
package org.xtext.example.mydsl.idea.highlighting;

import org.eclipse.xtext.idea.highlighting.SemanticHighlightVisitor;
import org.xtext.example.mydsl.idea.lang.MyDslLanguage;

public class MyDslSemanticHighlightVisitor extends SemanticHighlightVisitor {
	public MyDslSemanticHighlightVisitor() {
		MyDslLanguage.INSTANCE.injectMembers(this);
	}
}
