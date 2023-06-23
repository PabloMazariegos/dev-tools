import { LuBinary, LuPackagePlus, LuFingerprint } from 'react-icons/lu';
import {
  BsFiletypeSql,
  BsGear,
  BsFileEarmarkText,
  BsImage,
  BsRegex,
  BsInputCursorText
} from 'react-icons/bs';
import { VscJson, VscSymbolKeyword } from 'react-icons/vsc';
import { SidebarConfiguration } from '@/@types/sidebar';

export const sidebarData: Array<SidebarConfiguration> = [
  {
    label: 'Encoders / Decoders',
    icon: LuBinary,
    items: [
      {
        label: 'Base64 Text',
        icon: BsFileEarmarkText,
        link: '/encoders/base64-text',
        description: 'Encode and decode base64 to plain text.'
      },
      {
        label: 'Base64 Image',
        icon: BsImage,
        link: '/encoders/base64-image',
        description: 'Encode and decode base64 to image.'
      }
    ]
  },
  {
    label: 'Generators',
    icon: LuPackagePlus,
    items: [
      {
        label: 'UUID',
        icon: VscSymbolKeyword,
        link: '/generators/uuid',
        description: 'Generate UUID v4.'
      },
      {
        label: 'SQL Scripts',
        icon: BsFiletypeSql,
        link: '/generators/sql',
        description: 'Generate SQL Scripts like insert, update, delete of any table or use the presets.'
      },
      {
        label: 'Bcrypt',
        icon: LuFingerprint,
        link: '/generators/bcrypt',
        description: 'Encrypt your data with Bcrypt hashing.'
      }
    ]
  },
  {
    label: 'Converters',
    icon: BsGear,
    items: [
      {
        label: 'Java Class <> JSON ',
        icon: VscJson,
        link: '/converters/java-json',
        description: 'Transform your Java class to a JSON specially to build payloads or transform your JSON to map a new Java class.'
      }
    ]
  },
  {
    label: 'Text',
    icon: BsInputCursorText,
    items: [
      {
        label: 'RegEx Tester',
        icon: BsRegex,
        link: '/text/regex-tester',
        description: 'Test your RegEx with sample text.'
      }
    ]
  }
];
