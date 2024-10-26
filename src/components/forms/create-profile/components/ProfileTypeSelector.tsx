import { FormField } from '@/components/ui/form';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ProfileType } from '@/types';
import { crossProfileTypes, ProfileTypes } from '../__mocks__';

type ProfileTypeSelectorProps = {
  control: any;
  handleProfileTypeChange: (type: ProfileType) => void;
  defaultValue: ProfileType;
};

export default function ProfileTypeSelector({
  control,
  handleProfileTypeChange,
  defaultValue,
}: ProfileTypeSelectorProps) {
  return (
    <div className='space-y-4'>
      <h2 className='text-xl font-semibold'>Tipo de Perfil</h2>
      <span className='text-sm text-gray-500'>
        Selecione o perfil que deseja cadastrar antes de prosseguir
      </span>

      <FormField
        control={control}
        name='profileType'
        render={() => (
          <ToggleGroup
            size='lg'
            variant='brand'
            type='single'
            onValueChange={(value) =>
              handleProfileTypeChange(value as ProfileType)
            }
            defaultValue={defaultValue}
            className='flex justify-start bg-slate-50 rounded-t-3xl p-4 gap-4'
          >
            {ProfileTypes.map((type) => (
              <ToggleGroupItem
                key={type}
                value={type}
                aria-label={crossProfileTypes[type]}
              >
                {crossProfileTypes[type]}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        )}
      />
    </div>
  );
}
