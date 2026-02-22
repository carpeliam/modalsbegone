#!/usr/bin/env node

import path from 'node:path';
import fs from 'node:fs';
import Manifest from 'chrome-manifest';

import packageJson from '../package.json' with { type: 'json' };
import manifestJson from '../manifest.json' with { type: 'json' };

const version = packageJson.version;
const manifest = new Manifest(manifestJson);

manifest.merge({ version });

fs.writeFileSync(path.join(import.meta.dirname, '..', 'manifest.json'), manifest.toBuffer());
