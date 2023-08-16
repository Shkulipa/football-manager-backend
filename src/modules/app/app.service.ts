import { Injectable } from '@nestjs/common';
import { path } from 'app-root-path';
import * as fs from 'fs';
import hljs from 'highlight.js';
import * as MarkdownIt from 'markdown-it';

@Injectable()
export class AppService {
  getReadme(): string {
    const filePath = path + '/README.md';
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const md = new MarkdownIt({
      html: true,
      highlight: (str: string, lang: string) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre style="background-color: #f5f5f5; padding: 1em;"><code class="hljs" style="color: #333;">' +
              hljs.highlight(lang, str, true).value +
              '</code></pre>'
            );
          } catch (__) {}
        }

        return (
          '<pre style="background-color: #f5f5f5; padding: 1em;"><code style="color: #333;">' +
          md.utils.escapeHtml(str) +
          '</code></pre>'
        );
      },
    });
    const htmlContent = md.render(fileContent);
    return htmlContent;
  }
}
