import type { ComponentShape } from '@/common/type'

type CommonOptions = {
  width?: number | string
  height?: number | string
  shape?: Exclude<ComponentShape, 'circle'>
}

export type TitleOptions = CommonOptions

export type ButtonOptions = CommonOptions

export type ParagraphOptions = CommonOptions & {
  lines?: number
}

export type ImageOptions = CommonOptions & {
  size?: number
  shape?: ComponentShape
}

export type SkeletonType = 'title' | 'paragraph' | 'image' | 'button'

export type TitleSkeletonProps = {
  type: 'title'
  options?: TitleOptions
}

export type ParagraphSkeletonProps = {
  type: 'paragraph'
  options?: ParagraphOptions
}

export type ImageSkeletonProps = {
  type: 'image'
  options?: ImageOptions
}

export type ButtonSkeletonProps = {
  type: 'button'
  options?: ButtonOptions
}
