import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Pensado para médicos',
    description: 'Hecho por medicos para medicos',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Templates disponibles',
    description: 'Herramientas sencillas listas para usar',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Tiempos flexibles',
    description: 'Opciones de horario para los dias de guardia',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Opción de mentoria',
    description: 'Coordina una sesion personalizada',
    icon: <ContactSupportIcon />,
  },
]
