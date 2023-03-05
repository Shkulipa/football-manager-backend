import { Test, TestingModule } from '@nestjs/testing';
import { path } from 'app-root-path';
import * as fs from 'fs';
import * as MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('App Module', () => {
    it('AppController should be defined', () => {
      expect(appController).toBeDefined();
    });

    it('AppService should be defined', () => {
      expect(appService).toBeDefined();
    });

    it('should return readme.md with html syntax', () => {
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
      expect(appController.readme()).toBe(htmlContent);
    });
  });
});
