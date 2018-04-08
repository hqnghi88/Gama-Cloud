/*
 * generated by Xtext 2.10.0
 */
package org.xtext.example.mydsl.idea.lang;

import com.intellij.openapi.fileTypes.FileTypeConsumer;
import com.intellij.openapi.fileTypes.FileTypeFactory;
import org.jetbrains.annotations.NotNull;

public class MyDslFileTypeFactory extends FileTypeFactory {

	@Override
	public void createFileTypes(@NotNull FileTypeConsumer consumer) {
		consumer.consume(MyDslFileType.INSTANCE, AbstractMyDslFileType.DEFAULT_EXTENSION);
	}

}
