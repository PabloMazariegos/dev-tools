import { LuBinary, LuPackagePlus, LuFingerprint } from 'react-icons/lu';
import { BsFiletypeSql, BsGear, BsFileEarmarkText, BsImage } from 'react-icons/bs';
import { VscJson, VscSymbolKeyword } from 'react-icons/vsc';

export const sidebarData = [
  {
    label: 'Encoders / Decoders',
    icon: LuBinary,
    items: [
      {
        label: 'Base64 Text',
        icon: BsFileEarmarkText
      },
      {
        label: 'Base64 Image',
        icon: BsImage
      }
    ]
  },
  {
    label: 'Generators',
    icon: LuPackagePlus,
    items: [
      {
        label: 'UUID',
        icon: VscSymbolKeyword
      },
      {
        label: 'SQL Scripts',
        icon: BsFiletypeSql
      },
      {
        label: 'Bcrypt',
        icon: LuFingerprint
      }
    ]
  },
  {
    label: 'Converters',
    icon: BsGear,
    items: [
      {
        label: 'Java Class <> JSON ',
        icon: VscJson
      }
    ]
  }
];
