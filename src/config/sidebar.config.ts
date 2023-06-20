import { LuBinary, LuPackagePlus, LuFingerprint } from 'react-icons/lu';
import { BsFiletypeSql, BsGear, BsFileEarmarkText, BsImage } from 'react-icons/bs';
import { VscJson, VscSymbolKeyword } from 'react-icons/vsc';
import { SidebarCategoryProps } from '@/types/SidebarTypes';

export const sidebarData: Array<SidebarCategoryProps> = [
  {
    label: 'Encoders / Decoders',
    icon: LuBinary,
    slug: 'encoder-decoder',
    items: [
      {
        label: 'Base64 Text',
        icon: BsFileEarmarkText,
        slug: 'base64-text'
      },
      {
        label: 'Base64 Image',
        icon: BsImage,
        slug: 'base64-image'
      }
    ]
  },
  {
    label: 'Generators',
    icon: LuPackagePlus,
    slug: 'generators',
    items: [
      {
        label: 'UUID',
        icon: VscSymbolKeyword,
        slug: 'uuid'
      },
      {
        label: 'SQL Scripts',
        icon: BsFiletypeSql,
        slug: 'sql-scritps'
      },
      {
        label: 'Bcrypt',
        icon: LuFingerprint,
        slug: 'bcrypt'
      }
    ]
  },
  {
    label: 'Converters',
    icon: BsGear,
    slug: 'converters',
    items: [
      {
        label: 'Java Class <> JSON ',
        icon: VscJson,
        slug: 'java-to-json'
      }
    ]
  }
];
