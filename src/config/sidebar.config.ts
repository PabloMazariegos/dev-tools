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
        link: '/encoders/base64-text'
      },
      {
        label: 'Base64 Image',
        icon: BsImage,
        link: '/encoders/base64-image'
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
        link: '/generators/uuid'
      },
      {
        label: 'SQL Scripts',
        icon: BsFiletypeSql,
        link: '/generators/sql'
      },
      {
        label: 'Bcrypt',
        icon: LuFingerprint,
        link: '/generators/bcrypt'
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
        link: '/converters/java-json'
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
        link: '/text/regex-tester'
      }
    ]
  }
];
